
const express = require('express')
import {handler1995} from "./handler1995";
const app = express()
app.get('/1995', handler1995)
app.listen(3000, () => {})
        