
const express = require('express')
import {handler1407} from "./handler1407";
const app = express()
app.get('/1407', handler1407)
app.listen(3000, () => {})
        