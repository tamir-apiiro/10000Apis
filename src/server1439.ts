
const express = require('express')
import {handler1439} from "./handler1439";
const app = express()
app.get('/1439', handler1439)
app.listen(3000, () => {})
        