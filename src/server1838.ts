
const express = require('express')
import {handler1838} from "./handler1838";
const app = express()
app.get('/1838', handler1838)
app.listen(3000, () => {})
        