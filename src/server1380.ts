
const express = require('express')
import {handler1380} from "./handler1380";
const app = express()
app.get('/1380', handler1380)
app.listen(3000, () => {})
        