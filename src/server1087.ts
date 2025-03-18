
const express = require('express')
import {handler1087} from "./handler1087";
const app = express()
app.get('/1087', handler1087)
app.listen(3000, () => {})
        