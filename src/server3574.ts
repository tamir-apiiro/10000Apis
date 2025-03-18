
const express = require('express')
import {handler3574} from "./handler3574";
const app = express()
app.get('/3574', handler3574)
app.listen(3000, () => {})
        