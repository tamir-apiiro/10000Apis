
const express = require('express')
import {handler1984} from "./handler1984";
const app = express()
app.get('/1984', handler1984)
app.listen(3000, () => {})
        