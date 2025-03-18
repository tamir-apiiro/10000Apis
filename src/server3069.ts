
const express = require('express')
import {handler3069} from "./handler3069";
const app = express()
app.get('/3069', handler3069)
app.listen(3000, () => {})
        