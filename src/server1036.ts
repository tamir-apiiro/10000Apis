
const express = require('express')
import {handler1036} from "./handler1036";
const app = express()
app.get('/1036', handler1036)
app.listen(3000, () => {})
        