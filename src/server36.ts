
const express = require('express')
import {handler36} from "./handler36";
const app = express()
app.get('/36', handler36)
app.listen(3000, () => {})
        