
const express = require('express')
import {handler1998} from "./handler1998";
const app = express()
app.get('/1998', handler1998)
app.listen(3000, () => {})
        