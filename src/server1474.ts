
const express = require('express')
import {handler1474} from "./handler1474";
const app = express()
app.get('/1474', handler1474)
app.listen(3000, () => {})
        