import name_strs as ns


def createDiv(elim,margin=0):
    ret_str=''''''
    ret_str+=ns.container.format(3,margin,elim)
    return ret_str

def makeNavList():
# ask for the list name they wannna give
    # take input in a list
    rang=int(input("Enter the range of the list: "))
    names=[]
    for name in range(rang):
        names.append(input("Enter the name of the list: "))
        

    ret_str=''''''
    for name in names:
        ret_str+= ns.nav_item.format(name)
    return ret_str

def create_nav(name,list_items):
    
    ret_str=''''''
    ret_str+=ns.nav_str.format(name,list_items)
    return ret_str


def create_container(insiders):
    ret_str=''''''
    ret_str+=ns.container.format(insiders)
    return ret_str

def create_image(src):

    ret_str=''''''
    ret_str+=ns.image_str.format(src)
    return ret_str    

def create_col(names):

    ret_str=''''''
    for name in names:
        if len(names)==1:
            ret_str+=ns.cols.format(12,name)
        else:   ret_str+=ns.cols.format(6,name)
    return ret_str

def create_row(cols):
    ret_str=''''''
    ret_str+=ns.rows.format(cols)
    return ret_str

# x=makeNavList()
# print(x)

# zz=create_nav('navbar',x)
# print(zz)



# the div_creation .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
cols=create_col(['rock','pock',create_image('./assets/fresh.jpg')])

print('\n\n\n')
print( createDiv (create_row( cols ),margin=5  ))


cols=create_col(['vaire Vai',create_image('./assets/fresh.jpg')])

print( createDiv (create_row( cols )  ))


cols=create_col(['kemon acen vaiiw??'])

print( createDiv (create_row( cols ),margin=3  ))






