
const express = require('express')
import {handler1862} from "./handler1862";
const app = express()
app.get('/1862', handler1862)
app.listen(3000, () => {})
        