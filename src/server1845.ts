
const express = require('express')
import {handler1845} from "./handler1845";
const app = express()
app.get('/1845', handler1845)
app.listen(3000, () => {})
        