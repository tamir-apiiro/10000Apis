
const express = require('express')
import {handler1069} from "./handler1069";
const app = express()
app.get('/1069', handler1069)
app.listen(3000, () => {})
        