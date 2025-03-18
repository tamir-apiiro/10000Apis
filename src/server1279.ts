
const express = require('express')
import {handler1279} from "./handler1279";
const app = express()
app.get('/1279', handler1279)
app.listen(3000, () => {})
        