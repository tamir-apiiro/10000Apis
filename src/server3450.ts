
const express = require('express')
import {handler3450} from "./handler3450";
const app = express()
app.get('/3450', handler3450)
app.listen(3000, () => {})
        