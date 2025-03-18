
const express = require('express')
import {handler6279} from "./handler6279";
const app = express()
app.get('/6279', handler6279)
app.listen(3000, () => {})
        