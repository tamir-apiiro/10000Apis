
const express = require('express')
import {handler1312} from "./handler1312";
const app = express()
app.get('/1312', handler1312)
app.listen(3000, () => {})
        