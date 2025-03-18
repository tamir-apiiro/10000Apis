
const express = require('express')
import {handler1450} from "./handler1450";
const app = express()
app.get('/1450', handler1450)
app.listen(3000, () => {})
        