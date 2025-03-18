
const express = require('express')
import {handler1485} from "./handler1485";
const app = express()
app.get('/1485', handler1485)
app.listen(3000, () => {})
        