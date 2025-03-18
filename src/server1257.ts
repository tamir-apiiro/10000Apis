
const express = require('express')
import {handler1257} from "./handler1257";
const app = express()
app.get('/1257', handler1257)
app.listen(3000, () => {})
        