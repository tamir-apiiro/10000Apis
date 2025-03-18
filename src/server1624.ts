
const express = require('express')
import {handler1624} from "./handler1624";
const app = express()
app.get('/1624', handler1624)
app.listen(3000, () => {})
        