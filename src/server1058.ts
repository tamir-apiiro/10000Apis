
const express = require('express')
import {handler1058} from "./handler1058";
const app = express()
app.get('/1058', handler1058)
app.listen(3000, () => {})
        