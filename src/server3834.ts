
const express = require('express')
import {handler3834} from "./handler3834";
const app = express()
app.get('/3834', handler3834)
app.listen(3000, () => {})
        