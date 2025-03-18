
const express = require('express')
import {handler1313} from "./handler1313";
const app = express()
app.get('/1313', handler1313)
app.listen(3000, () => {})
        