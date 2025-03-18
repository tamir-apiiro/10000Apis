
const express = require('express')
import {handler3959} from "./handler3959";
const app = express()
app.get('/3959', handler3959)
app.listen(3000, () => {})
        