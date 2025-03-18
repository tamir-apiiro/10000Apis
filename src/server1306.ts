
const express = require('express')
import {handler1306} from "./handler1306";
const app = express()
app.get('/1306', handler1306)
app.listen(3000, () => {})
        