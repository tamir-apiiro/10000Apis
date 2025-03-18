
const express = require('express')
import {handler1967} from "./handler1967";
const app = express()
app.get('/1967', handler1967)
app.listen(3000, () => {})
        