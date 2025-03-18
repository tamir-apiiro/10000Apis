
const express = require('express')
import {handler3373} from "./handler3373";
const app = express()
app.get('/3373', handler3373)
app.listen(3000, () => {})
        