
const express = require('express')
import {handler1705} from "./handler1705";
const app = express()
app.get('/1705', handler1705)
app.listen(3000, () => {})
        