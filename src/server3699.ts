
const express = require('express')
import {handler3699} from "./handler3699";
const app = express()
app.get('/3699', handler3699)
app.listen(3000, () => {})
        