
const express = require('express')
import {handler3782} from "./handler3782";
const app = express()
app.get('/3782', handler3782)
app.listen(3000, () => {})
        