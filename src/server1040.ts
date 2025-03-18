
const express = require('express')
import {handler1040} from "./handler1040";
const app = express()
app.get('/1040', handler1040)
app.listen(3000, () => {})
        