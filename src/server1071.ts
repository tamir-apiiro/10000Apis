
const express = require('express')
import {handler1071} from "./handler1071";
const app = express()
app.get('/1071', handler1071)
app.listen(3000, () => {})
        