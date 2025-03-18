
const express = require('express')
import {handler1574} from "./handler1574";
const app = express()
app.get('/1574', handler1574)
app.listen(3000, () => {})
        