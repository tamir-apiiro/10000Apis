
const express = require('express')
import {handler2959} from "./handler2959";
const app = express()
app.get('/2959', handler2959)
app.listen(3000, () => {})
        