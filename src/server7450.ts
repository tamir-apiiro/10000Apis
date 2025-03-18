
const express = require('express')
import {handler7450} from "./handler7450";
const app = express()
app.get('/7450', handler7450)
app.listen(3000, () => {})
        