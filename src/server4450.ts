
const express = require('express')
import {handler4450} from "./handler4450";
const app = express()
app.get('/4450', handler4450)
app.listen(3000, () => {})
        