
const express = require('express')
import {handler1429} from "./handler1429";
const app = express()
app.get('/1429', handler1429)
app.listen(3000, () => {})
        