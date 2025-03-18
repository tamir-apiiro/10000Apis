
const express = require('express')
import {handler1604} from "./handler1604";
const app = express()
app.get('/1604', handler1604)
app.listen(3000, () => {})
        