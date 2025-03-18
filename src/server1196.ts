
const express = require('express')
import {handler1196} from "./handler1196";
const app = express()
app.get('/1196', handler1196)
app.listen(3000, () => {})
        