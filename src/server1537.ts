
const express = require('express')
import {handler1537} from "./handler1537";
const app = express()
app.get('/1537', handler1537)
app.listen(3000, () => {})
        