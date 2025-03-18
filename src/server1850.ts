
const express = require('express')
import {handler1850} from "./handler1850";
const app = express()
app.get('/1850', handler1850)
app.listen(3000, () => {})
        