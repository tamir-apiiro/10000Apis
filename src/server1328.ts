
const express = require('express')
import {handler1328} from "./handler1328";
const app = express()
app.get('/1328', handler1328)
app.listen(3000, () => {})
        