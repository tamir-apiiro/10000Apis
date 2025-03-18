
const express = require('express')
import {handler1892} from "./handler1892";
const app = express()
app.get('/1892', handler1892)
app.listen(3000, () => {})
        