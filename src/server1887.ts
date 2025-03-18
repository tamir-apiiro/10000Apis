
const express = require('express')
import {handler1887} from "./handler1887";
const app = express()
app.get('/1887', handler1887)
app.listen(3000, () => {})
        