
const express = require('express')
import {handler1019} from "./handler1019";
const app = express()
app.get('/1019', handler1019)
app.listen(3000, () => {})
        