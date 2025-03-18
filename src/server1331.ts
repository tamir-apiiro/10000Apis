
const express = require('express')
import {handler1331} from "./handler1331";
const app = express()
app.get('/1331', handler1331)
app.listen(3000, () => {})
        