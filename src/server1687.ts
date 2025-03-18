
const express = require('express')
import {handler1687} from "./handler1687";
const app = express()
app.get('/1687', handler1687)
app.listen(3000, () => {})
        