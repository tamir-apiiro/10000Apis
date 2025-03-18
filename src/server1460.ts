
const express = require('express')
import {handler1460} from "./handler1460";
const app = express()
app.get('/1460', handler1460)
app.listen(3000, () => {})
        