
const express = require('express')
import {handler1981} from "./handler1981";
const app = express()
app.get('/1981', handler1981)
app.listen(3000, () => {})
        